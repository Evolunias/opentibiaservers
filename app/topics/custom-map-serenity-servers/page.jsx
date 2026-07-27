import CustomMapSerenityServersKeywordPage, { generateMetadata } from './custom-map-serenity-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapSerenityServersKeywordPage />;
}
