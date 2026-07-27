import RetroOxygenotServerKeywordPage, { generateMetadata } from './retro-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOxygenotServerKeywordPage />;
}
