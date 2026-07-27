import HighrateCalmeraOtLoginKeywordPage, { generateMetadata } from './highrate-calmera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCalmeraOtLoginKeywordPage />;
}
