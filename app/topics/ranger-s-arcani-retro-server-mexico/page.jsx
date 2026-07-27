import RangerSArcaniRetroServerMexicoKeywordPage, { generateMetadata } from './ranger-s-arcani-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRetroServerMexicoKeywordPage />;
}
