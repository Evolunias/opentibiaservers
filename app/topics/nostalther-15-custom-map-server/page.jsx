import Nostalther15CustomMapServerKeywordPage, { generateMetadata } from './nostalther-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther15CustomMapServerKeywordPage />;
}
