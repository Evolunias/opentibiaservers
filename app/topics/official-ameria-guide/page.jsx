import OfficialAmeriaGuideKeywordPage, { generateMetadata } from './official-ameria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaGuideKeywordPage />;
}
