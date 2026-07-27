import TopEvoluniaOtServerKeywordPage, { generateMetadata } from './top-evolunia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoluniaOtServerKeywordPage />;
}
