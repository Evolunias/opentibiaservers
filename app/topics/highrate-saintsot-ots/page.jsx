import HighrateSaintsotOtsKeywordPage, { generateMetadata } from './highrate-saintsot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotOtsKeywordPage />;
}
