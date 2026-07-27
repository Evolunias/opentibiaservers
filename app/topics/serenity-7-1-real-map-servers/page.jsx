import Serenity71RealMapServersKeywordPage, { generateMetadata } from './serenity-7-1-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71RealMapServersKeywordPage />;
}
