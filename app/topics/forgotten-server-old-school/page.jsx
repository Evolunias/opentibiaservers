import ForgottenServerOldSchoolKeywordPage, { generateMetadata } from './forgotten-server-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerOldSchoolKeywordPage />;
}
