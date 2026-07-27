import Serenity11RealMapServersKeywordPage, { generateMetadata } from './serenity-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11RealMapServersKeywordPage />;
}
