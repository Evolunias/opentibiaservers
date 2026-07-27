import RookgaardTalesServerKeywordPage, { generateMetadata } from './rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesServerKeywordPage />;
}
