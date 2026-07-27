import TibiaretroCustomMapServerSouthAmericaKeywordPage, { generateMetadata } from './tibiaretro-custom-map-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroCustomMapServerSouthAmericaKeywordPage />;
}
