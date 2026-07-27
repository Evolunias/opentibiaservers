import EvoluniaOtServerKeywordPage, { generateMetadata } from './evolunia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaOtServerKeywordPage />;
}
