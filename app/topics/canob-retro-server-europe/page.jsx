import CanobRetroServerEuropeKeywordPage, { generateMetadata } from './canob-retro-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobRetroServerEuropeKeywordPage />;
}
