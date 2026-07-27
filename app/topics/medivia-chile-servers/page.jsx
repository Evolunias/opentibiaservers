import MediviaChileServersKeywordPage, { generateMetadata } from './medivia-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaChileServersKeywordPage />;
}
