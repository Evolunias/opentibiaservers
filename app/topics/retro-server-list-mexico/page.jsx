import RetroServerListMexicoKeywordPage, { generateMetadata } from './retro-server-list-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServerListMexicoKeywordPage />;
}
