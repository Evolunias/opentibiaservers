import Serenity86RealMapServerKeywordPage, { generateMetadata } from './serenity-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86RealMapServerKeywordPage />;
}
