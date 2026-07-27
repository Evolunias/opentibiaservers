import RetroWikiBrazilKeywordPage, { generateMetadata } from './retro-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroWikiBrazilKeywordPage />;
}
