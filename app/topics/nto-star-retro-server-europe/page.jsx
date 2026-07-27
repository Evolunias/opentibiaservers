import NtoStarRetroServerEuropeKeywordPage, { generateMetadata } from './nto-star-retro-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerEuropeKeywordPage />;
}
