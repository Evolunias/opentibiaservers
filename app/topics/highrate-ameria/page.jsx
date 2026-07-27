import HighrateAmeriaKeywordPage, { generateMetadata } from './highrate-ameria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaKeywordPage />;
}
