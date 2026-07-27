import PopularRookgaardTalesTibiaKeywordPage, { generateMetadata } from './popular-rookgaard-tales-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRookgaardTalesTibiaKeywordPage />;
}
