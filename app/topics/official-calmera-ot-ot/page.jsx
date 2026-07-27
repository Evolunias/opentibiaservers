import OfficialCalmeraOtOtKeywordPage, { generateMetadata } from './official-calmera-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtOtKeywordPage />;
}
