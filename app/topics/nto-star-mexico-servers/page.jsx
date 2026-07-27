import NtoStarMexicoServersKeywordPage, { generateMetadata } from './nto-star-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarMexicoServersKeywordPage />;
}
