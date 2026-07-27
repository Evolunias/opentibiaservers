import PopularLumineraCreateAccountKeywordPage, { generateMetadata } from './popular-luminera-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraCreateAccountKeywordPage />;
}
