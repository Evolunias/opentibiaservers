import EvoleraRealMapServerPolandKeywordPage, { generateMetadata } from './evolera-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraRealMapServerPolandKeywordPage />;
}
