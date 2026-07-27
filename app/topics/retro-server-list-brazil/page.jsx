import RetroServerListBrazilKeywordPage, { generateMetadata } from './retro-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServerListBrazilKeywordPage />;
}
