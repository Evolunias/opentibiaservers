import MediviaRetroServerEuropeKeywordPage, { generateMetadata } from './medivia-retro-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRetroServerEuropeKeywordPage />;
}
