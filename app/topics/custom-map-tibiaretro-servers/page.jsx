import CustomMapTibiaretroServersKeywordPage, { generateMetadata } from './custom-map-tibiaretro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapTibiaretroServersKeywordPage />;
}
