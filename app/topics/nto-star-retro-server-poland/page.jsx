import NtoStarRetroServerPolandKeywordPage, { generateMetadata } from './nto-star-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerPolandKeywordPage />;
}
