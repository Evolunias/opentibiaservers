import MediviaUkServerKeywordPage, { generateMetadata } from './medivia-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaUkServerKeywordPage />;
}
