import CustomMapTibiantisServerKeywordPage, { generateMetadata } from './custom-map-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiantisServerKeywordPage />;
}
