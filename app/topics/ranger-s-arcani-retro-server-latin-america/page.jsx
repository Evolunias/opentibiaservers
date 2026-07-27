import RangerSArcaniRetroServerLatinAmericaKeywordPage, { generateMetadata } from './ranger-s-arcani-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRetroServerLatinAmericaKeywordPage />;
}
