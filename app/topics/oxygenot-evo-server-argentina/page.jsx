import OxygenotEvoServerArgentinaKeywordPage, { generateMetadata } from './oxygenot-evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotEvoServerArgentinaKeywordPage />;
}
