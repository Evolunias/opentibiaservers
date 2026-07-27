import VenoreotRetroServerUsaKeywordPage, { generateMetadata } from './venoreot-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRetroServerUsaKeywordPage />;
}
