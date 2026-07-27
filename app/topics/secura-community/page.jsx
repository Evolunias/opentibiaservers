import SecuraCommunityKeywordPage, { generateMetadata } from './secura-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SecuraCommunityKeywordPage />;
}
