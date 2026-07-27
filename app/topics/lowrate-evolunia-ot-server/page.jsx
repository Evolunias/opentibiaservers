import LowrateEvoluniaOtServerKeywordPage, { generateMetadata } from './lowrate-evolunia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaOtServerKeywordPage />;
}
