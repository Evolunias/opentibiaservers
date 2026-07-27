import PopularHarmoniaOtLoginKeywordPage, { generateMetadata } from './popular-harmonia-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtLoginKeywordPage />;
}
