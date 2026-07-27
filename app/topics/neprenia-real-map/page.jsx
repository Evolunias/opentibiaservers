import NepreniaRealMapKeywordPage, { generateMetadata } from './neprenia-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaRealMapKeywordPage />;
}
