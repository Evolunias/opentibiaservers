import RangerSArcaniUkServerKeywordPage, { generateMetadata } from './ranger-s-arcani-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniUkServerKeywordPage />;
}
