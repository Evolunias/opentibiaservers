import ActiveOriginaltibiaKeywordPage, { generateMetadata } from './active-originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOriginaltibiaKeywordPage />;
}
