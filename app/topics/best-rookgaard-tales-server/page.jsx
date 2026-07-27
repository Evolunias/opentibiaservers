import BestRookgaardTalesServerKeywordPage, { generateMetadata } from './best-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRookgaardTalesServerKeywordPage />;
}
