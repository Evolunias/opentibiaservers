import Serenity84RealMapServerKeywordPage, { generateMetadata } from './serenity-8-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84RealMapServerKeywordPage />;
}
