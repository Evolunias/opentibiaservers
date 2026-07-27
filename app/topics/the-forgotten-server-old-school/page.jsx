import TheForgottenServerOldSchoolKeywordPage, { generateMetadata } from './the-forgotten-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerOldSchoolKeywordPage />;
}
