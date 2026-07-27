import BestEvoluniaServerKeywordPage, { generateMetadata } from './best-evolunia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoluniaServerKeywordPage />;
}
