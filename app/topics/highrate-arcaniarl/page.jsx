import HighrateArcaniarlKeywordPage, { generateMetadata } from './highrate-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlKeywordPage />;
}
