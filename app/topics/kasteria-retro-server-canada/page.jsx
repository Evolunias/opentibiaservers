import KasteriaRetroServerCanadaKeywordPage, { generateMetadata } from './kasteria-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRetroServerCanadaKeywordPage />;
}
