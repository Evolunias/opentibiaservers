import OriginaltibiaFranceServersKeywordPage, { generateMetadata } from './originaltibia-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaFranceServersKeywordPage />;
}
