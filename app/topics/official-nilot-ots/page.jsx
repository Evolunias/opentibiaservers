import OfficialNilotOtsKeywordPage, { generateMetadata } from './official-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotOtsKeywordPage />;
}
