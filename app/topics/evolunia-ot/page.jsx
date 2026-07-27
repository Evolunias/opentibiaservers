import EvoluniaOtKeywordPage, { generateMetadata } from './evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaOtKeywordPage />;
}
