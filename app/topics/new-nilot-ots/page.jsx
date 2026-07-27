import NewNilotOtsKeywordPage, { generateMetadata } from './new-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotOtsKeywordPage />;
}
