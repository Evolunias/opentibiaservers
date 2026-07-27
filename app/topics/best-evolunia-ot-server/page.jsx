import BestEvoluniaOtServerKeywordPage, { generateMetadata } from './best-evolunia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoluniaOtServerKeywordPage />;
}
