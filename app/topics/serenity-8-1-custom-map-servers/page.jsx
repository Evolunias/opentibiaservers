import Serenity81CustomMapServersKeywordPage, { generateMetadata } from './serenity-8-1-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81CustomMapServersKeywordPage />;
}
