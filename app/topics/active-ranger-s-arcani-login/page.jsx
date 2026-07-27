import ActiveRangerSArcaniLoginKeywordPage, { generateMetadata } from './active-ranger-s-arcani-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRangerSArcaniLoginKeywordPage />;
}
