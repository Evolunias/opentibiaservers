import OfficialNepreniaGuideKeywordPage, { generateMetadata } from './official-neprenia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaGuideKeywordPage />;
}
