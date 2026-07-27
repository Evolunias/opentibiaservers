import NepreniaPvpeServerFranceKeywordPage, { generateMetadata } from './neprenia-pvpe-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpeServerFranceKeywordPage />;
}
