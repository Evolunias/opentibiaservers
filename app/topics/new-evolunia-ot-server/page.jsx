import NewEvoluniaOtServerKeywordPage, { generateMetadata } from './new-evolunia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoluniaOtServerKeywordPage />;
}
