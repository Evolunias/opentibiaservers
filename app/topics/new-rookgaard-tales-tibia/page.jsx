import NewRookgaardTalesTibiaKeywordPage, { generateMetadata } from './new-rookgaard-tales-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRookgaardTalesTibiaKeywordPage />;
}
