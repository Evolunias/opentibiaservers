import BaiakRookgaardTalesServerKeywordPage, { generateMetadata } from './baiak-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakRookgaardTalesServerKeywordPage />;
}
