import OfficialAmeriaOtServerKeywordPage, { generateMetadata } from './official-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaOtServerKeywordPage />;
}
