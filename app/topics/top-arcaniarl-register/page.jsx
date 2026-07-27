import TopArcaniarlRegisterKeywordPage, { generateMetadata } from './top-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlRegisterKeywordPage />;
}
