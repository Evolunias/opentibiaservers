import Unline13RealMapServerKeywordPage, { generateMetadata } from './unline-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13RealMapServerKeywordPage />;
}
