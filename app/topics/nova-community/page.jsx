import NovaCommunityKeywordPage, { generateMetadata } from './nova-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaCommunityKeywordPage />;
}
