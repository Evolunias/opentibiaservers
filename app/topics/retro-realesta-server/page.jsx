import RetroRealestaServerKeywordPage, { generateMetadata } from './retro-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRealestaServerKeywordPage />;
}
