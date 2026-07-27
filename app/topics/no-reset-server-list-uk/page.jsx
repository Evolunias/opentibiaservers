import NoResetServerListUkKeywordPage, { generateMetadata } from './no-reset-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListUkKeywordPage />;
}
