import CustomMapImperianicServerKeywordPage, { generateMetadata } from './custom-map-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapImperianicServerKeywordPage />;
}
