import PopularSabrehavenCreateAccountKeywordPage, { generateMetadata } from './popular-sabrehaven-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenCreateAccountKeywordPage />;
}
