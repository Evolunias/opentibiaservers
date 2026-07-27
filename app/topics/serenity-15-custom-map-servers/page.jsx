import Serenity15CustomMapServersKeywordPage, { generateMetadata } from './serenity-15-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15CustomMapServersKeywordPage />;
}
