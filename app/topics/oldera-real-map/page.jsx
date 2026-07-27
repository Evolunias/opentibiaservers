import OlderaRealMapKeywordPage, { generateMetadata } from './oldera-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaRealMapKeywordPage />;
}
