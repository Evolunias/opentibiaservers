import NoResetArcaniarlLoginKeywordPage, { generateMetadata } from './no-reset-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlLoginKeywordPage />;
}
