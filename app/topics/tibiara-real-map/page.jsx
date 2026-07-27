import TibiaraRealMapKeywordPage, { generateMetadata } from './tibiara-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRealMapKeywordPage />;
}
