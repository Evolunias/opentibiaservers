import FreshStartNepreniaKeywordPage, { generateMetadata } from './fresh-start-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaKeywordPage />;
}
