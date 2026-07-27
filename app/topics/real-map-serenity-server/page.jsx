import RealMapSerenityServerKeywordPage, { generateMetadata } from './real-map-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityServerKeywordPage />;
}
