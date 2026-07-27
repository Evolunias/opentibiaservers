import NewOriginaltibiaOtKeywordPage, { generateMetadata } from './new-originaltibia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOriginaltibiaOtKeywordPage />;
}
