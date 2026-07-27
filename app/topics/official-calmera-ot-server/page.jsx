import OfficialCalmeraOtServerKeywordPage, { generateMetadata } from './official-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCalmeraOtServerKeywordPage />;
}
