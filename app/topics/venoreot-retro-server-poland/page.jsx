import VenoreotRetroServerPolandKeywordPage, { generateMetadata } from './venoreot-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRetroServerPolandKeywordPage />;
}
