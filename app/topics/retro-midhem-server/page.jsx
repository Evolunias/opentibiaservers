import RetroMidhemServerKeywordPage, { generateMetadata } from './retro-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroMidhemServerKeywordPage />;
}
