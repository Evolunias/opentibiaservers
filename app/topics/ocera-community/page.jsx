import OceraCommunityKeywordPage, { generateMetadata } from './ocera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraCommunityKeywordPage />;
}
