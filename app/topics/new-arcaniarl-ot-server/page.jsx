import NewArcaniarlOtServerKeywordPage, { generateMetadata } from './new-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlOtServerKeywordPage />;
}
