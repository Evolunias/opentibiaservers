import RetroThorniaServerKeywordPage, { generateMetadata } from './retro-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroThorniaServerKeywordPage />;
}
