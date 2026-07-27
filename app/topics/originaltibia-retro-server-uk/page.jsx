import OriginaltibiaRetroServerUkKeywordPage, { generateMetadata } from './originaltibia-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaRetroServerUkKeywordPage />;
}
