import FreshStartNilotServerKeywordPage, { generateMetadata } from './fresh-start-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotServerKeywordPage />;
}
