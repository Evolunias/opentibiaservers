import OriginaltibiaWarsKeywordPage, { generateMetadata } from './originaltibia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaWarsKeywordPage />;
}
