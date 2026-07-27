import OfficialKasteriaGuideKeywordPage, { generateMetadata } from './official-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaGuideKeywordPage />;
}
