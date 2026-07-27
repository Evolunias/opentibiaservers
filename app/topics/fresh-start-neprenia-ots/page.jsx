import FreshStartNepreniaOtsKeywordPage, { generateMetadata } from './fresh-start-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaOtsKeywordPage />;
}
