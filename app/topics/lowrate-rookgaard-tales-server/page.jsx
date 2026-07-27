import LowrateRookgaardTalesServerKeywordPage, { generateMetadata } from './lowrate-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRookgaardTalesServerKeywordPage />;
}
