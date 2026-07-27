import LumineraCommunityKeywordPage, { generateMetadata } from './luminera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraCommunityKeywordPage />;
}
