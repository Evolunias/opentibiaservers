import HighrateArcaniarlLoginKeywordPage, { generateMetadata } from './highrate-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlLoginKeywordPage />;
}
