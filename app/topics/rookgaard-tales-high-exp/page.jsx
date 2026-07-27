import RookgaardTalesHighExpKeywordPage, { generateMetadata } from './rookgaard-tales-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesHighExpKeywordPage />;
}
