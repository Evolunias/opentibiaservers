import HarmoniaOtResetKeywordPage, { generateMetadata } from './harmonia-ot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtResetKeywordPage />;
}
