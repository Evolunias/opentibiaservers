import OfficialTibiameGuideKeywordPage, { generateMetadata } from './official-tibiame-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameGuideKeywordPage />;
}
