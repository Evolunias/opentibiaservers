import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-south-america');
}

export default function RealestaFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-south-america" />;
}
