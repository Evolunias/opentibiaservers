import MediviaArgentinaServerKeywordPage, { generateMetadata } from './medivia-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaArgentinaServerKeywordPage />;
}
