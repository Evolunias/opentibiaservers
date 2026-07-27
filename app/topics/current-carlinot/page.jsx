import CurrentCarlinotKeywordPage, { generateMetadata } from './current-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotKeywordPage />;
}
