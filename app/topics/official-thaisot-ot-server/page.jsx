import OfficialThaisotOtServerKeywordPage, { generateMetadata } from './official-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotOtServerKeywordPage />;
}
