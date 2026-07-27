import RetroRealeraServerKeywordPage, { generateMetadata } from './retro-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroRealeraServerKeywordPage />;
}
