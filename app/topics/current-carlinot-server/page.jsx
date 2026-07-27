import CurrentCarlinotServerKeywordPage, { generateMetadata } from './current-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotServerKeywordPage />;
}
