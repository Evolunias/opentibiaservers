import CurrentOriginaltibiaClientKeywordPage, { generateMetadata } from './current-originaltibia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaClientKeywordPage />;
}
