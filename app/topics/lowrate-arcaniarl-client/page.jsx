import LowrateArcaniarlClientKeywordPage, { generateMetadata } from './lowrate-arcaniarl-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlClientKeywordPage />;
}
