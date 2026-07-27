import OfficialCalmeraOtTibiaKeywordPage, { generateMetadata } from './official-calmera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtTibiaKeywordPage />;
}
