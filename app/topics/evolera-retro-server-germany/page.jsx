import EvoleraRetroServerGermanyKeywordPage, { generateMetadata } from './evolera-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraRetroServerGermanyKeywordPage />;
}
