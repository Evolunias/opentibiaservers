import Nostalther86CustomMapServerKeywordPage, { generateMetadata } from './nostalther-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nostalther86CustomMapServerKeywordPage />;
}
