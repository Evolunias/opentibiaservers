import LowrateMediviaOtsKeywordPage, { generateMetadata } from './lowrate-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaOtsKeywordPage />;
}
