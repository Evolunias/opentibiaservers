import TopRookgaardTalesLoginKeywordPage, { generateMetadata } from './top-rookgaard-tales-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesLoginKeywordPage />;
}
