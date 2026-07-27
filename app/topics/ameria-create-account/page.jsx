import AmeriaCreateAccountKeywordPage, { generateMetadata } from './ameria-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaCreateAccountKeywordPage />;
}
