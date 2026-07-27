import LowrateCalmeraOtLoginKeywordPage, { generateMetadata } from './lowrate-calmera-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCalmeraOtLoginKeywordPage />;
}
