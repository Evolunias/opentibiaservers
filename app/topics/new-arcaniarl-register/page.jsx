import NewArcaniarlRegisterKeywordPage, { generateMetadata } from './new-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlRegisterKeywordPage />;
}
