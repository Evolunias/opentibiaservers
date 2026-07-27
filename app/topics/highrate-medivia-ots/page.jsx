import HighrateMediviaOtsKeywordPage, { generateMetadata } from './highrate-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaOtsKeywordPage />;
}
