import TopKasteriaKeywordPage, { generateMetadata } from './top-kasteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopKasteriaKeywordPage />;
}
