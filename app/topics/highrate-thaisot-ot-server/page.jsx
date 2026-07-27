import HighrateThaisotOtServerKeywordPage, { generateMetadata } from './highrate-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotOtServerKeywordPage />;
}
