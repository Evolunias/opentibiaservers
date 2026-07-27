import UnlineSeasonKeywordPage, { generateMetadata } from './unline-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineSeasonKeywordPage />;
}
