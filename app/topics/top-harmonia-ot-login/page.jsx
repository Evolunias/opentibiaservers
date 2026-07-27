import TopHarmoniaOtLoginKeywordPage, { generateMetadata } from './top-harmonia-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopHarmoniaOtLoginKeywordPage />;
}
