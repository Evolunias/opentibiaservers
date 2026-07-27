import HarmoniaOtLoginKeywordPage, { generateMetadata } from './harmonia-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtLoginKeywordPage />;
}
