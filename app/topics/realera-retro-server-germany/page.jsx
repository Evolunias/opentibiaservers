import RealeraRetroServerGermanyKeywordPage, { generateMetadata } from './realera-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraRetroServerGermanyKeywordPage />;
}
