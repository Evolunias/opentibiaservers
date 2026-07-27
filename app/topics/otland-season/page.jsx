import OtlandSeasonKeywordPage, { generateMetadata } from './otland-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandSeasonKeywordPage />;
}
