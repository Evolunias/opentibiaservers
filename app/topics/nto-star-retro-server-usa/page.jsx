import NtoStarRetroServerUsaKeywordPage, { generateMetadata } from './nto-star-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRetroServerUsaKeywordPage />;
}
