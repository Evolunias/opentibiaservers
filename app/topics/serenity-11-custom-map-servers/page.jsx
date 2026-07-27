import Serenity11CustomMapServersKeywordPage, { generateMetadata } from './serenity-11-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11CustomMapServersKeywordPage />;
}
