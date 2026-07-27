import TibianusRetroServerGermanyKeywordPage, { generateMetadata } from './tibianus-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRetroServerGermanyKeywordPage />;
}
