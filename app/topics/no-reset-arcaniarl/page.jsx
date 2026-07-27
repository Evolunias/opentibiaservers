import NoResetArcaniarlKeywordPage, { generateMetadata } from './no-reset-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlKeywordPage />;
}
