import CustomMapRealeraServerKeywordPage, { generateMetadata } from './custom-map-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapRealeraServerKeywordPage />;
}
