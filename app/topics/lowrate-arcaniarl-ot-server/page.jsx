import LowrateArcaniarlOtServerKeywordPage, { generateMetadata } from './lowrate-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlOtServerKeywordPage />;
}
