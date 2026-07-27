import OriginaltibiaStatusKeywordPage, { generateMetadata } from './originaltibia-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaStatusKeywordPage />;
}
