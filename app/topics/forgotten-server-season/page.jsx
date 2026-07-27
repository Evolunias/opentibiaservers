import ForgottenServerSeasonKeywordPage, { generateMetadata } from './forgotten-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ForgottenServerSeasonKeywordPage />;
}
