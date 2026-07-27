import TopNilotOtsKeywordPage, { generateMetadata } from './top-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotOtsKeywordPage />;
}
