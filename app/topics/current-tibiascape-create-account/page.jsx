import CurrentTibiascapeCreateAccountKeywordPage, { generateMetadata } from './current-tibiascape-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiascapeCreateAccountKeywordPage />;
}
