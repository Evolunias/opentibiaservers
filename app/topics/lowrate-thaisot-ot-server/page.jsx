import LowrateThaisotOtServerKeywordPage, { generateMetadata } from './lowrate-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotOtServerKeywordPage />;
}
