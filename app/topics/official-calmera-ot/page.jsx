import OfficialCalmeraOtKeywordPage, { generateMetadata } from './official-calmera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtKeywordPage />;
}
