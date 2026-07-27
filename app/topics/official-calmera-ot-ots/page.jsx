import OfficialCalmeraOtOtsKeywordPage, { generateMetadata } from './official-calmera-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtOtsKeywordPage />;
}
