import NoResetWikiChileKeywordPage, { generateMetadata } from './no-reset-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiChileKeywordPage />;
}
