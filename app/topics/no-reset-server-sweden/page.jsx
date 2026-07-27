import NoResetServerSwedenKeywordPage, { generateMetadata } from './no-reset-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetServerSwedenKeywordPage />;
}
