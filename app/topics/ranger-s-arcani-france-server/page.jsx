import RangerSArcaniFranceServerKeywordPage, { generateMetadata } from './ranger-s-arcani-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniFranceServerKeywordPage />;
}
