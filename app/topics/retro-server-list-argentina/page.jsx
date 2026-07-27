import RetroServerListArgentinaKeywordPage, { generateMetadata } from './retro-server-list-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServerListArgentinaKeywordPage />;
}
