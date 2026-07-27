import CurrentEvoluniaOtKeywordPage, { generateMetadata } from './current-evolunia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaOtKeywordPage />;
}
