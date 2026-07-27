import PvpEnforcedWikiBrazilKeywordPage, { generateMetadata } from './pvp-enforced-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedWikiBrazilKeywordPage />;
}
