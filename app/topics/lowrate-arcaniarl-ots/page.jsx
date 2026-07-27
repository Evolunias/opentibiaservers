import LowrateArcaniarlOtsKeywordPage, { generateMetadata } from './lowrate-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlOtsKeywordPage />;
}
