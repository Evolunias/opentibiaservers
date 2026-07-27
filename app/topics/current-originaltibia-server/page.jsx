import CurrentOriginaltibiaServerKeywordPage, { generateMetadata } from './current-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaServerKeywordPage />;
}
