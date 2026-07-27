import RangerSArcaniBossesKeywordPage, { generateMetadata } from './ranger-s-arcani-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniBossesKeywordPage />;
}
