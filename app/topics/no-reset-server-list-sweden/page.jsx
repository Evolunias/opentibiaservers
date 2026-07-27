import NoResetServerListSwedenKeywordPage, { generateMetadata } from './no-reset-server-list-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerListSwedenKeywordPage />;
}
