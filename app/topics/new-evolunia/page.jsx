import NewEvoluniaKeywordPage, { generateMetadata } from './new-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaKeywordPage />;
}
