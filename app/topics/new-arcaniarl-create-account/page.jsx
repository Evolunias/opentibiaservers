import NewArcaniarlCreateAccountKeywordPage, { generateMetadata } from './new-arcaniarl-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlCreateAccountKeywordPage />;
}
