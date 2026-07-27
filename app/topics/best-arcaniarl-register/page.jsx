import BestArcaniarlRegisterKeywordPage, { generateMetadata } from './best-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlRegisterKeywordPage />;
}
