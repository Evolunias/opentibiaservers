import CustomMapTibiaoriginsServersKeywordPage, { generateMetadata } from './custom-map-tibiaorigins-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaoriginsServersKeywordPage />;
}
