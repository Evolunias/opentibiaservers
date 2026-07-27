import OfficialOxygenotOtsKeywordPage, { generateMetadata } from './official-oxygenot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotOtsKeywordPage />;
}
