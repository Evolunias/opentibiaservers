import TheForgottenServerSwedenKeywordPage, { generateMetadata } from './the-forgotten-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerSwedenKeywordPage />;
}
