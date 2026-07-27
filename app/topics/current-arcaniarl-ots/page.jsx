import CurrentArcaniarlOtsKeywordPage, { generateMetadata } from './current-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlOtsKeywordPage />;
}
