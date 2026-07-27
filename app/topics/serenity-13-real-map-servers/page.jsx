import Serenity13RealMapServersKeywordPage, { generateMetadata } from './serenity-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13RealMapServersKeywordPage />;
}
