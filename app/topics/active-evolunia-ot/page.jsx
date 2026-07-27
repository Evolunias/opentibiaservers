import ActiveEvoluniaOtKeywordPage, { generateMetadata } from './active-evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoluniaOtKeywordPage />;
}
