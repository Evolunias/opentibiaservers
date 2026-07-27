import NewEvoluniaServerKeywordPage, { generateMetadata } from './new-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaServerKeywordPage />;
}
