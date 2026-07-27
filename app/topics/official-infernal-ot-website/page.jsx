import OfficialInfernalOtWebsiteKeywordPage, { generateMetadata } from './official-infernal-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialInfernalOtWebsiteKeywordPage />;
}
