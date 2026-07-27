import BestEvoluniaOtKeywordPage, { generateMetadata } from './best-evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoluniaOtKeywordPage />;
}
