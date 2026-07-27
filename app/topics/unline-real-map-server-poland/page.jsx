import UnlineRealMapServerPolandKeywordPage, { generateMetadata } from './unline-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineRealMapServerPolandKeywordPage />;
}
