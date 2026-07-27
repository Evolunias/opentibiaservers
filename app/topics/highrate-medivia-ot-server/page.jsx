import HighrateMediviaOtServerKeywordPage, { generateMetadata } from './highrate-medivia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaOtServerKeywordPage />;
}
