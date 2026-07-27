import GuardiaCommunityKeywordPage, { generateMetadata } from './guardia-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaCommunityKeywordPage />;
}
