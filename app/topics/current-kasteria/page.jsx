import CurrentKasteriaKeywordPage, { generateMetadata } from './current-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaKeywordPage />;
}
