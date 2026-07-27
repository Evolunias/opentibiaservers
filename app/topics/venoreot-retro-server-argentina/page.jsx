import VenoreotRetroServerArgentinaKeywordPage, { generateMetadata } from './venoreot-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRetroServerArgentinaKeywordPage />;
}
