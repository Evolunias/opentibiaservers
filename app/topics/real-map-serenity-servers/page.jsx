import RealMapSerenityServersKeywordPage, { generateMetadata } from './real-map-serenity-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityServersKeywordPage />;
}
