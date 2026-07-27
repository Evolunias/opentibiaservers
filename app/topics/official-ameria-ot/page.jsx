import OfficialAmeriaOtKeywordPage, { generateMetadata } from './official-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaOtKeywordPage />;
}
