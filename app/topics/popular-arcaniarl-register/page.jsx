import PopularArcaniarlRegisterKeywordPage, { generateMetadata } from './popular-arcaniarl-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlRegisterKeywordPage />;
}
