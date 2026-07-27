import RangerSArcaniMexicoServersKeywordPage, { generateMetadata } from './ranger-s-arcani-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniMexicoServersKeywordPage />;
}
