import RetroServersEuropeKeywordPage, { generateMetadata } from './retro-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServersEuropeKeywordPage />;
}
