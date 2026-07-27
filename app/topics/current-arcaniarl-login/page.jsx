import CurrentArcaniarlLoginKeywordPage, { generateMetadata } from './current-arcaniarl-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlLoginKeywordPage />;
}
