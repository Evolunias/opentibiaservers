import LowrateRookgaardTalesLoginKeywordPage, { generateMetadata } from './lowrate-rookgaard-tales-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRookgaardTalesLoginKeywordPage />;
}
