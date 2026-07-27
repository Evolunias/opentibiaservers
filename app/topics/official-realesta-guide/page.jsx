import OfficialRealestaGuideKeywordPage, { generateMetadata } from './official-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaGuideKeywordPage />;
}
