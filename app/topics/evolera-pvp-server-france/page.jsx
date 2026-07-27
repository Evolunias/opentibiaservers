import EvoleraPvpServerFranceKeywordPage, { generateMetadata } from './evolera-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraPvpServerFranceKeywordPage />;
}
