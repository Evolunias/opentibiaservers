import NepreniaOtsKeywordPage, { generateMetadata } from './neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaOtsKeywordPage />;
}
