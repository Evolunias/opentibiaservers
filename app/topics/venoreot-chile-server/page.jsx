import VenoreotChileServerKeywordPage, { generateMetadata } from './venoreot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotChileServerKeywordPage />;
}
