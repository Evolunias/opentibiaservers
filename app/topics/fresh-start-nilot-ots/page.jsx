import FreshStartNilotOtsKeywordPage, { generateMetadata } from './fresh-start-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotOtsKeywordPage />;
}
