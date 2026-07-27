import Serenity96RealMapServerKeywordPage, { generateMetadata } from './serenity-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96RealMapServerKeywordPage />;
}
