import RookgaardTalesCreateAccountKeywordPage, { generateMetadata } from './rookgaard-tales-create-account';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesCreateAccountKeywordPage />;
}
