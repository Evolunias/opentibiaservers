import NoResetArcaniarlClientKeywordPage, { generateMetadata } from './no-reset-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArcaniarlClientKeywordPage />;
}
