import OfficialUnlineOtsKeywordPage, { generateMetadata } from './official-unline-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineOtsKeywordPage />;
}
