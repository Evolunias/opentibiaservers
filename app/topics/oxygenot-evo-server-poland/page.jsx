import OxygenotEvoServerPolandKeywordPage, { generateMetadata } from './oxygenot-evo-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotEvoServerPolandKeywordPage />;
}
