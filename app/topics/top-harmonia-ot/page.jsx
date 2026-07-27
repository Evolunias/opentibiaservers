import TopHarmoniaOtKeywordPage, { generateMetadata } from './top-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopHarmoniaOtKeywordPage />;
}
