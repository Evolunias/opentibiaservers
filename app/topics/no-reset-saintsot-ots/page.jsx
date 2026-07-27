import NoResetSaintsotOtsKeywordPage, { generateMetadata } from './no-reset-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotOtsKeywordPage />;
}
