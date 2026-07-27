import Alastera81RealMapServerKeywordPage, { generateMetadata } from './alastera-8-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera81RealMapServerKeywordPage />;
}
