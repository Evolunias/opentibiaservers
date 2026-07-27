import CurrentOriginaltibiaLoginKeywordPage, { generateMetadata } from './current-originaltibia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaLoginKeywordPage />;
}
