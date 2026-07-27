import Serenity13CustomMapServersKeywordPage, { generateMetadata } from './serenity-13-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13CustomMapServersKeywordPage />;
}
