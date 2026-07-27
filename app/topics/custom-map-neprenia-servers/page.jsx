import CustomMapNepreniaServersKeywordPage, { generateMetadata } from './custom-map-neprenia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapNepreniaServersKeywordPage />;
}
