import Serenity86CustomMapServersKeywordPage, { generateMetadata } from './serenity-8-6-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity86CustomMapServersKeywordPage />;
}
