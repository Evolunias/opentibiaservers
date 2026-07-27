import VenoreotFunServerKeywordPage, { generateMetadata } from './venoreot-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotFunServerKeywordPage />;
}
