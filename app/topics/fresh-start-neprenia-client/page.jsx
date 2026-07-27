import FreshStartNepreniaClientKeywordPage, { generateMetadata } from './fresh-start-neprenia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaClientKeywordPage />;
}
