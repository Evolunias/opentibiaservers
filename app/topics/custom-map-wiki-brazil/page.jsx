import CustomMapWikiBrazilKeywordPage, { generateMetadata } from './custom-map-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapWikiBrazilKeywordPage />;
}
