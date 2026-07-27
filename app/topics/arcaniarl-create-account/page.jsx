import ArcaniarlCreateAccountKeywordPage, { generateMetadata } from './arcaniarl-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlCreateAccountKeywordPage />;
}
