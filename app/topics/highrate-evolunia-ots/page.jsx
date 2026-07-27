import HighrateEvoluniaOtsKeywordPage, { generateMetadata } from './highrate-evolunia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaOtsKeywordPage />;
}
