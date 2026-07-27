import NoResetClientUkKeywordPage, { generateMetadata } from './no-reset-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClientUkKeywordPage />;
}
