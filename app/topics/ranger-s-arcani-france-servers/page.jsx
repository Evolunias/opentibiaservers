import RangerSArcaniFranceServersKeywordPage, { generateMetadata } from './ranger-s-arcani-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniFranceServersKeywordPage />;
}
