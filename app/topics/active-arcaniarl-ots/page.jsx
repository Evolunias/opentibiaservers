import ActiveArcaniarlOtsKeywordPage, { generateMetadata } from './active-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlOtsKeywordPage />;
}
