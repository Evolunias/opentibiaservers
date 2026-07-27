import CustomMapCanobServersKeywordPage, { generateMetadata } from './custom-map-canob-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapCanobServersKeywordPage />;
}
