import AlasteraPvpServerFranceKeywordPage, { generateMetadata } from './alastera-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpServerFranceKeywordPage />;
}
