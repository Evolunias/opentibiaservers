import Serenity84CustomMapServersKeywordPage, { generateMetadata } from './serenity-8-4-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84CustomMapServersKeywordPage />;
}
