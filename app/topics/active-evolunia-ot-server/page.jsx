import ActiveEvoluniaOtServerKeywordPage, { generateMetadata } from './active-evolunia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaOtServerKeywordPage />;
}
