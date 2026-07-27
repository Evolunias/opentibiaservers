import TopEvoluniaServerKeywordPage, { generateMetadata } from './top-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaServerKeywordPage />;
}
