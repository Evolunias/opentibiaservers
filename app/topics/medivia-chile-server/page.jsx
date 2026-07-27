import MediviaChileServerKeywordPage, { generateMetadata } from './medivia-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaChileServerKeywordPage />;
}
