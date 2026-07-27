import VenoreotRetroServerUkKeywordPage, { generateMetadata } from './venoreot-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRetroServerUkKeywordPage />;
}
