import NepreniaMexicoServerKeywordPage, { generateMetadata } from './neprenia-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaMexicoServerKeywordPage />;
}
