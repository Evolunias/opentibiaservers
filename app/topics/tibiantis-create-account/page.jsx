import TibiantisCreateAccountKeywordPage, { generateMetadata } from './tibiantis-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisCreateAccountKeywordPage />;
}
