import NtoStarRetroServerSwedenKeywordPage, { generateMetadata } from './nto-star-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerSwedenKeywordPage />;
}
