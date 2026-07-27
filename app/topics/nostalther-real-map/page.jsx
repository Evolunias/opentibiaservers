import NostaltherRealMapKeywordPage, { generateMetadata } from './nostalther-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherRealMapKeywordPage />;
}
