import RetroStatusMexicoKeywordPage, { generateMetadata } from './retro-status-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroStatusMexicoKeywordPage />;
}
