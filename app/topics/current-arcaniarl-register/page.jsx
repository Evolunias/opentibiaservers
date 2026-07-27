import CurrentArcaniarlRegisterKeywordPage, { generateMetadata } from './current-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlRegisterKeywordPage />;
}
