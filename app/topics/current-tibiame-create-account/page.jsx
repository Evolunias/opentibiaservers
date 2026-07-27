import CurrentTibiameCreateAccountKeywordPage, { generateMetadata } from './current-tibiame-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameCreateAccountKeywordPage />;
}
