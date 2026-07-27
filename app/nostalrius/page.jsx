import NostalriusPage, { generateMetadata } from './nostalrius';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostalriusPage />;
}
