import ActiveArcaniarlLoginKeywordPage, { generateMetadata } from './active-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlLoginKeywordPage />;
}
