import TopArcaniarlOtServerKeywordPage, { generateMetadata } from './top-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlOtServerKeywordPage />;
}
