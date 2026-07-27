import CustomMapKasteriaServersKeywordPage, { generateMetadata } from './custom-map-kasteria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapKasteriaServersKeywordPage />;
}
