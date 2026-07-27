import RuberaCommunityKeywordPage, { generateMetadata } from './rubera-community';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaCommunityKeywordPage />;
}
