import TopEvoluniaClientKeywordPage, { generateMetadata } from './top-evolunia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaClientKeywordPage />;
}
