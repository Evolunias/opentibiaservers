import NtoStarRetroServerCanadaKeywordPage, { generateMetadata } from './nto-star-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerCanadaKeywordPage />;
}
