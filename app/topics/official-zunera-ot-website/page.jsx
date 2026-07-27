import OfficialZuneraOtWebsiteKeywordPage, { generateMetadata } from './official-zunera-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZuneraOtWebsiteKeywordPage />;
}
