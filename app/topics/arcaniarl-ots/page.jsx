import ArcaniarlOtsKeywordPage, { generateMetadata } from './arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlOtsKeywordPage />;
}
