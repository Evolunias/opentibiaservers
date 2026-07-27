import EleraCommunityKeywordPage, { generateMetadata } from './elera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EleraCommunityKeywordPage />;
}
