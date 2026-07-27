import TibiaraRetroServerGermanyKeywordPage, { generateMetadata } from './tibiara-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRetroServerGermanyKeywordPage />;
}
