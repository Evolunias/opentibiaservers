import CustomMapTibiaretroServerKeywordPage, { generateMetadata } from './custom-map-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaretroServerKeywordPage />;
}
