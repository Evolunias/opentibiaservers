import MediviaArgentinaServersKeywordPage, { generateMetadata } from './medivia-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaArgentinaServersKeywordPage />;
}
