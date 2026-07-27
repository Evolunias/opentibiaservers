import TheForgottenServerListKeywordPage, { generateMetadata } from './the-forgotten-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerListKeywordPage />;
}
