import ActiveRangerSArcaniOtServerKeywordPage, { generateMetadata } from './active-ranger-s-arcani-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRangerSArcaniOtServerKeywordPage />;
}
