import CustomMapXanteriaServersKeywordPage, { generateMetadata } from './custom-map-xanteria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapXanteriaServersKeywordPage />;
}
