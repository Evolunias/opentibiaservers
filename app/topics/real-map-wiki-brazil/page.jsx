import RealMapWikiBrazilKeywordPage, { generateMetadata } from './real-map-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiBrazilKeywordPage />;
}
