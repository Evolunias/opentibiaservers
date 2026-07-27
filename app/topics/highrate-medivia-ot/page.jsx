import HighrateMediviaOtKeywordPage, { generateMetadata } from './highrate-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaOtKeywordPage />;
}
