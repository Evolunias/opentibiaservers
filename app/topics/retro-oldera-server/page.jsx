import RetroOlderaServerKeywordPage, { generateMetadata } from './retro-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroOlderaServerKeywordPage />;
}
