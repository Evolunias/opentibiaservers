import CurrentArcaniarlKeywordPage, { generateMetadata } from './current-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlKeywordPage />;
}
