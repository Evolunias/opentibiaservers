import ActiveThaisotOtsKeywordPage, { generateMetadata } from './active-thaisot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotOtsKeywordPage />;
}
