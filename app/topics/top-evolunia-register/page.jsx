import TopEvoluniaRegisterKeywordPage, { generateMetadata } from './top-evolunia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaRegisterKeywordPage />;
}
