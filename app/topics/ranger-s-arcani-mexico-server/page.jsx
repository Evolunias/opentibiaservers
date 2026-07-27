import RangerSArcaniMexicoServerKeywordPage, { generateMetadata } from './ranger-s-arcani-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniMexicoServerKeywordPage />;
}
