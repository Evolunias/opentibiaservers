import Serenity14CustomMapServersKeywordPage, { generateMetadata } from './serenity-14-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14CustomMapServersKeywordPage />;
}
