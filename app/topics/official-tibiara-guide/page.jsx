import OfficialTibiaraGuideKeywordPage, { generateMetadata } from './official-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraGuideKeywordPage />;
}
