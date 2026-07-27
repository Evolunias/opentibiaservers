import HighrateEvoluniaServerKeywordPage, { generateMetadata } from './highrate-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaServerKeywordPage />;
}
