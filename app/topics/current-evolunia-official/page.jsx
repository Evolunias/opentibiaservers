import CurrentEvoluniaOfficialKeywordPage, { generateMetadata } from './current-evolunia-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaOfficialKeywordPage />;
}
