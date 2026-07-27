import OriginaltibiaKeywordPage, { generateMetadata } from './originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaKeywordPage />;
}
