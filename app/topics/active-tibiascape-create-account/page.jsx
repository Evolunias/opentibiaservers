import ActiveTibiascapeCreateAccountKeywordPage, { generateMetadata } from './active-tibiascape-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeCreateAccountKeywordPage />;
}
