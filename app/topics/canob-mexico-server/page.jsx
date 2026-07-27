import CanobMexicoServerKeywordPage, { generateMetadata } from './canob-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobMexicoServerKeywordPage />;
}
