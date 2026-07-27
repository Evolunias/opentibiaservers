import TopRookgaardTalesServerKeywordPage, { generateMetadata } from './top-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesServerKeywordPage />;
}
