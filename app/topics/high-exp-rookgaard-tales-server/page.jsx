import HighExpRookgaardTalesServerKeywordPage, { generateMetadata } from './high-exp-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpRookgaardTalesServerKeywordPage />;
}
