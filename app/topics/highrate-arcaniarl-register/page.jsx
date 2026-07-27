import HighrateArcaniarlRegisterKeywordPage, { generateMetadata } from './highrate-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlRegisterKeywordPage />;
}
