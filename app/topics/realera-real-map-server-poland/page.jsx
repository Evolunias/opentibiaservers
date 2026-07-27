import RealeraRealMapServerPolandKeywordPage, { generateMetadata } from './realera-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraRealMapServerPolandKeywordPage />;
}
