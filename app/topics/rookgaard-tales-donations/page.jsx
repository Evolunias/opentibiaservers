import RookgaardTalesDonationsKeywordPage, { generateMetadata } from './rookgaard-tales-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesDonationsKeywordPage />;
}
