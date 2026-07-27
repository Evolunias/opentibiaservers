import Serenity74RealMapServerKeywordPage, { generateMetadata } from './serenity-7-4-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity74RealMapServerKeywordPage />;
}
