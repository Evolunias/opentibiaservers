import CurrentEvoluniaServerKeywordPage, { generateMetadata } from './current-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaServerKeywordPage />;
}
