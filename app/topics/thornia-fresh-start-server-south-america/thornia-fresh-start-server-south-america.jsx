import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-fresh-start-server-south-america');
}

export default function ThorniaFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-fresh-start-server-south-america" />;
}
