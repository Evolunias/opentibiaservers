import TibiaraRetroServerCanadaKeywordPage, { generateMetadata } from './tibiara-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraRetroServerCanadaKeywordPage />;
}
