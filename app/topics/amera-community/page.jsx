import AmeraCommunityKeywordPage, { generateMetadata } from './amera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraCommunityKeywordPage />;
}
