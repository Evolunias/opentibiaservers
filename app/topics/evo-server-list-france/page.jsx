import EvoServerListFranceKeywordPage, { generateMetadata } from './evo-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerListFranceKeywordPage />;
}
