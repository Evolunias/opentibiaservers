import CustomMapRealestaServerKeywordPage, { generateMetadata } from './custom-map-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRealestaServerKeywordPage />;
}
