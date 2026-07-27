import CurrentKasteriaLoginKeywordPage, { generateMetadata } from './current-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaLoginKeywordPage />;
}
