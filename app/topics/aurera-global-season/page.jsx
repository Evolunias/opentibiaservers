import AureraGlobalSeasonKeywordPage, { generateMetadata } from './aurera-global-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSeasonKeywordPage />;
}
