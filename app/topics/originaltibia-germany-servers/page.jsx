import OriginaltibiaGermanyServersKeywordPage, { generateMetadata } from './originaltibia-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaGermanyServersKeywordPage />;
}
