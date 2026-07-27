import OfficialThaisotOtsKeywordPage, { generateMetadata } from './official-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotOtsKeywordPage />;
}
