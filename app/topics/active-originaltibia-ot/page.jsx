import ActiveOriginaltibiaOtKeywordPage, { generateMetadata } from './active-originaltibia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOriginaltibiaOtKeywordPage />;
}
