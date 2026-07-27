import KasteriaFranceServerKeywordPage, { generateMetadata } from './kasteria-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaFranceServerKeywordPage />;
}
