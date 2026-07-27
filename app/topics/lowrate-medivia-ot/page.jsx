import LowrateMediviaOtKeywordPage, { generateMetadata } from './lowrate-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaOtKeywordPage />;
}
