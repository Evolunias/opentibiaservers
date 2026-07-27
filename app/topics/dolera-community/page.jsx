import DoleraCommunityKeywordPage, { generateMetadata } from './dolera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraCommunityKeywordPage />;
}
