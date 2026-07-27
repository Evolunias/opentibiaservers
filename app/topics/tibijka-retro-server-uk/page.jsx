import TibijkaRetroServerUkKeywordPage, { generateMetadata } from './tibijka-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaRetroServerUkKeywordPage />;
}
