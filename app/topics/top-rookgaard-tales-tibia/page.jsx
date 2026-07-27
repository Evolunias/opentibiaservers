import TopRookgaardTalesTibiaKeywordPage, { generateMetadata } from './top-rookgaard-tales-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRookgaardTalesTibiaKeywordPage />;
}
