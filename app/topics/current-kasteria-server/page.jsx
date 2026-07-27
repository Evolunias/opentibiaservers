import CurrentKasteriaServerKeywordPage, { generateMetadata } from './current-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaServerKeywordPage />;
}
