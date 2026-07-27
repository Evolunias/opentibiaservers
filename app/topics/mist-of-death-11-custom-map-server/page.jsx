import MistOfDeath11CustomMapServerKeywordPage, { generateMetadata } from './mist-of-death-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeath11CustomMapServerKeywordPage />;
}
