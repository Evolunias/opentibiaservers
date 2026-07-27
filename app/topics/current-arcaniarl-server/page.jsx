import CurrentArcaniarlServerKeywordPage, { generateMetadata } from './current-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlServerKeywordPage />;
}
