import MediviaFunServerKeywordPage, { generateMetadata } from './medivia-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaFunServerKeywordPage />;
}
