import Serenity11RealMapServerKeywordPage, { generateMetadata } from './serenity-11-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11RealMapServerKeywordPage />;
}
