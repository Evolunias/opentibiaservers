import CurrentTibiantisCreateAccountKeywordPage, { generateMetadata } from './current-tibiantis-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiantisCreateAccountKeywordPage />;
}
