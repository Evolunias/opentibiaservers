import RetroClientMexicoKeywordPage, { generateMetadata } from './retro-client-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientMexicoKeywordPage />;
}
