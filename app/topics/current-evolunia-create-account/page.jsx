import CurrentEvoluniaCreateAccountKeywordPage, { generateMetadata } from './current-evolunia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoluniaCreateAccountKeywordPage />;
}
