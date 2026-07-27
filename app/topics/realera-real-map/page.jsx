import RealeraRealMapKeywordPage, { generateMetadata } from './realera-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraRealMapKeywordPage />;
}
