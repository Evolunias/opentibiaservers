import CalmeraCommunityKeywordPage, { generateMetadata } from './calmera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraCommunityKeywordPage />;
}
