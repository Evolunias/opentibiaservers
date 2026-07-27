import CustomMapTibijkaServerKeywordPage, { generateMetadata } from './custom-map-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibijkaServerKeywordPage />;
}
