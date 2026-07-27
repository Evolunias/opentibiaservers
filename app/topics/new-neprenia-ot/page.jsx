import NewNepreniaOtKeywordPage, { generateMetadata } from './new-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNepreniaOtKeywordPage />;
}
