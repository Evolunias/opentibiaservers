import LowrateArcaniarlOtKeywordPage, { generateMetadata } from './lowrate-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlOtKeywordPage />;
}
