import HighrateEvoluniaLoginKeywordPage, { generateMetadata } from './highrate-evolunia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoluniaLoginKeywordPage />;
}
