import CustomMapAureraGlobalServersKeywordPage, { generateMetadata } from './custom-map-aurera-global-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapAureraGlobalServersKeywordPage />;
}
