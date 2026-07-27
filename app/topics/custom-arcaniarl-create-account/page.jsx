import CustomArcaniarlCreateAccountKeywordPage, { generateMetadata } from './custom-arcaniarl-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlCreateAccountKeywordPage />;
}
