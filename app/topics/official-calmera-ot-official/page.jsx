import OfficialCalmeraOtOfficialKeywordPage, { generateMetadata } from './official-calmera-ot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtOfficialKeywordPage />;
}
