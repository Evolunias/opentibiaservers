import TibijkaRetroServerGermanyKeywordPage, { generateMetadata } from './tibijka-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaRetroServerGermanyKeywordPage />;
}
