import NepteraCommunityKeywordPage, { generateMetadata } from './neptera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraCommunityKeywordPage />;
}
