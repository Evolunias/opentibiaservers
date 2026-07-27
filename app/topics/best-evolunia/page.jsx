import BestEvoluniaKeywordPage, { generateMetadata } from './best-evolunia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoluniaKeywordPage />;
}
