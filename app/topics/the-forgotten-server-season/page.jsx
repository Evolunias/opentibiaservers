import TheForgottenServerSeasonKeywordPage, { generateMetadata } from './the-forgotten-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerSeasonKeywordPage />;
}
