import ActiveArcaniarlOtKeywordPage, { generateMetadata } from './active-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlOtKeywordPage />;
}
