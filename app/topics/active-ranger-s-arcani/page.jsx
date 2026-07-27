import ActiveRangerSArcaniKeywordPage, { generateMetadata } from './active-ranger-s-arcani';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRangerSArcaniKeywordPage />;
}
