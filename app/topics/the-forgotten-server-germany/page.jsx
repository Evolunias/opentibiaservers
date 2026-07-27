import TheForgottenServerGermanyKeywordPage, { generateMetadata } from './the-forgotten-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerGermanyKeywordPage />;
}
