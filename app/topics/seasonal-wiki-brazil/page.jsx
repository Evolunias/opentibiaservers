import SeasonalWikiBrazilKeywordPage, { generateMetadata } from './seasonal-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalWikiBrazilKeywordPage />;
}
