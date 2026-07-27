import RetroKasteriaServerKeywordPage, { generateMetadata } from './retro-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroKasteriaServerKeywordPage />;
}
