import HighrateArcaniarlOtsKeywordPage, { generateMetadata } from './highrate-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlOtsKeywordPage />;
}
