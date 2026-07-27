import CanobBrazilServerKeywordPage, { generateMetadata } from './canob-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobBrazilServerKeywordPage />;
}
