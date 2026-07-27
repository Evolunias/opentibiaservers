import TibiaraRetroServerSwedenKeywordPage, { generateMetadata } from './tibiara-retro-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRetroServerSwedenKeywordPage />;
}
