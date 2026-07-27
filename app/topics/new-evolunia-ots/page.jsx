import NewEvoluniaOtsKeywordPage, { generateMetadata } from './new-evolunia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaOtsKeywordPage />;
}
