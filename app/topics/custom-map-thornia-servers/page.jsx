import CustomMapThorniaServersKeywordPage, { generateMetadata } from './custom-map-thornia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapThorniaServersKeywordPage />;
}
