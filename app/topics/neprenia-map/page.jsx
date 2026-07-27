import NepreniaMapKeywordPage, { generateMetadata } from './neprenia-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaMapKeywordPage />;
}
