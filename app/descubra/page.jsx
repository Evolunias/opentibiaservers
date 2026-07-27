import DescubraPage, { generateMetadata } from './descubra';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DescubraPage />;
}
