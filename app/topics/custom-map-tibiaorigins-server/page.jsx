import CustomMapTibiaoriginsServerKeywordPage, { generateMetadata } from './custom-map-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaoriginsServerKeywordPage />;
}
