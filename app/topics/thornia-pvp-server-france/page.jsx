import ThorniaPvpServerFranceKeywordPage, { generateMetadata } from './thornia-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaPvpServerFranceKeywordPage />;
}
