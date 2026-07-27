import NtoStarRetroServerBrazilKeywordPage, { generateMetadata } from './nto-star-retro-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerBrazilKeywordPage />;
}
