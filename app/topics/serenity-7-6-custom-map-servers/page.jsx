import Serenity76CustomMapServersKeywordPage, { generateMetadata } from './serenity-7-6-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity76CustomMapServersKeywordPage />;
}
