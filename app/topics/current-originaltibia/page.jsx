import CurrentOriginaltibiaKeywordPage, { generateMetadata } from './current-originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOriginaltibiaKeywordPage />;
}
