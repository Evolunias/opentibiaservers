import CurrentKasteriaClientKeywordPage, { generateMetadata } from './current-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaClientKeywordPage />;
}
