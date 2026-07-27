import RookgaardTalesRegisterKeywordPage, { generateMetadata } from './rookgaard-tales-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesRegisterKeywordPage />;
}
