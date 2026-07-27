import Serenity14RealMapServerKeywordPage, { generateMetadata } from './serenity-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14RealMapServerKeywordPage />;
}
