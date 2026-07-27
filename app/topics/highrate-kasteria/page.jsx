import HighrateKasteriaKeywordPage, { generateMetadata } from './highrate-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaKeywordPage />;
}
