import NoResetServerListEuropeKeywordPage, { generateMetadata } from './no-reset-server-list-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListEuropeKeywordPage />;
}
