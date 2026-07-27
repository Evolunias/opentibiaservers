import OriginaltibiaFranceServerKeywordPage, { generateMetadata } from './originaltibia-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaFranceServerKeywordPage />;
}
