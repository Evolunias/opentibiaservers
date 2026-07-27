import NoResetArcaniarlOtKeywordPage, { generateMetadata } from './no-reset-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlOtKeywordPage />;
}
