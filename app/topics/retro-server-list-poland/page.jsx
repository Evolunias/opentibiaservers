import RetroServerListPolandKeywordPage, { generateMetadata } from './retro-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroServerListPolandKeywordPage />;
}
