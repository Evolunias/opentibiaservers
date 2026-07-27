import CurrentHarmoniaOtLoginKeywordPage, { generateMetadata } from './current-harmonia-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentHarmoniaOtLoginKeywordPage />;
}
