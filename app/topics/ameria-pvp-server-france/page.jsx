import AmeriaPvpServerFranceKeywordPage, { generateMetadata } from './ameria-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaPvpServerFranceKeywordPage />;
}
