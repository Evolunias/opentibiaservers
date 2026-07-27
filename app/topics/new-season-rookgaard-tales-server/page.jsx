import NewSeasonRookgaardTalesServerKeywordPage, { generateMetadata } from './new-season-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRookgaardTalesServerKeywordPage />;
}
