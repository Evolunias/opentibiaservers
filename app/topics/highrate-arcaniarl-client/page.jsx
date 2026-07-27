import HighrateArcaniarlClientKeywordPage, { generateMetadata } from './highrate-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlClientKeywordPage />;
}
