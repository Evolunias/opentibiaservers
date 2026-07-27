import RangerSArcaniLatinAmericaServerKeywordPage, { generateMetadata } from './ranger-s-arcani-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniLatinAmericaServerKeywordPage />;
}
