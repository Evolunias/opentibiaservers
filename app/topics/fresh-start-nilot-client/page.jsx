import FreshStartNilotClientKeywordPage, { generateMetadata } from './fresh-start-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotClientKeywordPage />;
}
