import PopularTibiascapeCreateAccountKeywordPage, { generateMetadata } from './popular-tibiascape-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeCreateAccountKeywordPage />;
}
