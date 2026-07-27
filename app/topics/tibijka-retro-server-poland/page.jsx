import TibijkaRetroServerPolandKeywordPage, { generateMetadata } from './tibijka-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaRetroServerPolandKeywordPage />;
}
