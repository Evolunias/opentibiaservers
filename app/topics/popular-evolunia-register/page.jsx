import PopularEvoluniaRegisterKeywordPage, { generateMetadata } from './popular-evolunia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoluniaRegisterKeywordPage />;
}
