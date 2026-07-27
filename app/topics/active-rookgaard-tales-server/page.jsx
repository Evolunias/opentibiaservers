import ActiveRookgaardTalesServerKeywordPage, { generateMetadata } from './active-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRookgaardTalesServerKeywordPage />;
}
