import CanobBrazilServersKeywordPage, { generateMetadata } from './canob-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobBrazilServersKeywordPage />;
}
