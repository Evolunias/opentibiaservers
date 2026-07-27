import LowrateArcaniarlRegisterKeywordPage, { generateMetadata } from './lowrate-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlRegisterKeywordPage />;
}
