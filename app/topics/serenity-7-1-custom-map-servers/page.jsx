import Serenity71CustomMapServersKeywordPage, { generateMetadata } from './serenity-7-1-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71CustomMapServersKeywordPage />;
}
