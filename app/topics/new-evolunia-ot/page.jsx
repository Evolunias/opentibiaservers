import NewEvoluniaOtKeywordPage, { generateMetadata } from './new-evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaOtKeywordPage />;
}
