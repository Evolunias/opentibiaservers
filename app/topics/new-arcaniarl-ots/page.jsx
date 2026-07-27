import NewArcaniarlOtsKeywordPage, { generateMetadata } from './new-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlOtsKeywordPage />;
}
