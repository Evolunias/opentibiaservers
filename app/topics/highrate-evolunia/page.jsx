import HighrateEvoluniaKeywordPage, { generateMetadata } from './highrate-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaKeywordPage />;
}
