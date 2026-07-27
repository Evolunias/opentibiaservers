import NonPvpRookgaardTalesServerKeywordPage, { generateMetadata } from './non-pvp-rookgaard-tales-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRookgaardTalesServerKeywordPage />;
}
