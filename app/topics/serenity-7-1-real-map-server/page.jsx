import Serenity71RealMapServerKeywordPage, { generateMetadata } from './serenity-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71RealMapServerKeywordPage />;
}
