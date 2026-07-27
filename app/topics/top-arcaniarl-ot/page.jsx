import TopArcaniarlOtKeywordPage, { generateMetadata } from './top-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlOtKeywordPage />;
}
