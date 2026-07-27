import MidhemPvpServerFranceKeywordPage, { generateMetadata } from './midhem-pvp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPvpServerFranceKeywordPage />;
}
