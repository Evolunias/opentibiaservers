import CurrentRealestaKeywordPage, { generateMetadata } from './current-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaKeywordPage />;
}
