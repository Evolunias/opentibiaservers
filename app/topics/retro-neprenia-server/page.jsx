import RetroNepreniaServerKeywordPage, { generateMetadata } from './retro-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroNepreniaServerKeywordPage />;
}
