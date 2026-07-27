import NewSaintsotOtsKeywordPage, { generateMetadata } from './new-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotOtsKeywordPage />;
}
