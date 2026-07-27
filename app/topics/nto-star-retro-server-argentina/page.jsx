import NtoStarRetroServerArgentinaKeywordPage, { generateMetadata } from './nto-star-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerArgentinaKeywordPage />;
}
