import TibiaretroCustomMapServerSwedenKeywordPage, { generateMetadata } from './tibiaretro-custom-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroCustomMapServerSwedenKeywordPage />;
}
