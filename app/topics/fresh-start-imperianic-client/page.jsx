import FreshStartImperianicClientKeywordPage, { generateMetadata } from './fresh-start-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartImperianicClientKeywordPage />;
}
