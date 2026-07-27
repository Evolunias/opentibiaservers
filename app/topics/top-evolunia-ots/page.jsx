import TopEvoluniaOtsKeywordPage, { generateMetadata } from './top-evolunia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaOtsKeywordPage />;
}
