import Serenity12CustomMapServersKeywordPage, { generateMetadata } from './serenity-12-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12CustomMapServersKeywordPage />;
}
