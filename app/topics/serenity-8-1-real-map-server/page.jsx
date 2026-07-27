import Serenity81RealMapServerKeywordPage, { generateMetadata } from './serenity-8-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81RealMapServerKeywordPage />;
}
