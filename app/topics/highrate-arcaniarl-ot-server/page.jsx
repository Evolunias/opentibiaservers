import HighrateArcaniarlOtServerKeywordPage, { generateMetadata } from './highrate-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlOtServerKeywordPage />;
}
