import NewNepreniaOtsKeywordPage, { generateMetadata } from './new-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaOtsKeywordPage />;
}
