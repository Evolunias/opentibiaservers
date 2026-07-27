import NewEvoluniaLoginKeywordPage, { generateMetadata } from './new-evolunia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaLoginKeywordPage />;
}
