import NewArcaniarlOtKeywordPage, { generateMetadata } from './new-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlOtKeywordPage />;
}
