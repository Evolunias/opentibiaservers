import RookgaardTalesLoginKeywordPage, { generateMetadata } from './rookgaard-tales-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesLoginKeywordPage />;
}
