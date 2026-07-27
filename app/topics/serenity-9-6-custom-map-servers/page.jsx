import Serenity96CustomMapServersKeywordPage, { generateMetadata } from './serenity-9-6-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity96CustomMapServersKeywordPage />;
}
