import RetroEvoluniaServerKeywordPage, { generateMetadata } from './retro-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroEvoluniaServerKeywordPage />;
}
