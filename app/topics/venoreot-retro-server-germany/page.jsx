import VenoreotRetroServerGermanyKeywordPage, { generateMetadata } from './venoreot-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRetroServerGermanyKeywordPage />;
}
