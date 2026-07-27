import QuinteraCommunityKeywordPage, { generateMetadata } from './quintera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraCommunityKeywordPage />;
}
