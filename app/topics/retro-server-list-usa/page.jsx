import RetroServerListUsaKeywordPage, { generateMetadata } from './retro-server-list-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServerListUsaKeywordPage />;
}
