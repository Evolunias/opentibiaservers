import PvpeWikiBrazilKeywordPage, { generateMetadata } from './pvpe-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiBrazilKeywordPage />;
}
