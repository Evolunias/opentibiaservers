import NoResetArcaniarlOtsKeywordPage, { generateMetadata } from './no-reset-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlOtsKeywordPage />;
}
