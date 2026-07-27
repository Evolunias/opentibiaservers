import CurrentThorniaCreateAccountKeywordPage, { generateMetadata } from './current-thornia-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaCreateAccountKeywordPage />;
}
