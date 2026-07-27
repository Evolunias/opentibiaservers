import OfficialCarlinotOtsKeywordPage, { generateMetadata } from './official-carlinot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCarlinotOtsKeywordPage />;
}
