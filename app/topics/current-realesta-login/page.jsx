import CurrentRealestaLoginKeywordPage, { generateMetadata } from './current-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaLoginKeywordPage />;
}
