import NoResetClientEuropeKeywordPage, { generateMetadata } from './no-reset-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClientEuropeKeywordPage />;
}
