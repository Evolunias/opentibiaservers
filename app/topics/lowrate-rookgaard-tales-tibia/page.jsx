import LowrateRookgaardTalesTibiaKeywordPage, { generateMetadata } from './lowrate-rookgaard-tales-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRookgaardTalesTibiaKeywordPage />;
}
