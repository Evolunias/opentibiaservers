import ActiveArcaniarlOtServerKeywordPage, { generateMetadata } from './active-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlOtServerKeywordPage />;
}
