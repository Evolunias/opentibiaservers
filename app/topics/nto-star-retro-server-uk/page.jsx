import NtoStarRetroServerUkKeywordPage, { generateMetadata } from './nto-star-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerUkKeywordPage />;
}
