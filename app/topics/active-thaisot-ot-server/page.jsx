import ActiveThaisotOtServerKeywordPage, { generateMetadata } from './active-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotOtServerKeywordPage />;
}
