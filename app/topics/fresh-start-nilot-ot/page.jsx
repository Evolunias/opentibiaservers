import FreshStartNilotOtKeywordPage, { generateMetadata } from './fresh-start-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotOtKeywordPage />;
}
