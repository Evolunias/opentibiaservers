import Nostalther11CustomMapServerKeywordPage, { generateMetadata } from './nostalther-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther11CustomMapServerKeywordPage />;
}
