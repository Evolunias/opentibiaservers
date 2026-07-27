import CurrentArcaniarlOtKeywordPage, { generateMetadata } from './current-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlOtKeywordPage />;
}
