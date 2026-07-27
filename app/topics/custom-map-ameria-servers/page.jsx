import CustomMapAmeriaServersKeywordPage, { generateMetadata } from './custom-map-ameria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapAmeriaServersKeywordPage />;
}
