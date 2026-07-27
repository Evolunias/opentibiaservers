import ActiveSaintsotOtsKeywordPage, { generateMetadata } from './active-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotOtsKeywordPage />;
}
