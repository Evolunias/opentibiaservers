import AsteraCommunityKeywordPage, { generateMetadata } from './astera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraCommunityKeywordPage />;
}
