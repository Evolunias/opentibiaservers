import LowrateArcaniarlLoginKeywordPage, { generateMetadata } from './lowrate-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlLoginKeywordPage />;
}
