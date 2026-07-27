import TibiaraRetroServerUkKeywordPage, { generateMetadata } from './tibiara-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRetroServerUkKeywordPage />;
}
