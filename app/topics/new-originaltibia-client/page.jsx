import NewOriginaltibiaClientKeywordPage, { generateMetadata } from './new-originaltibia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOriginaltibiaClientKeywordPage />;
}
