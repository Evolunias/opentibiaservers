import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-open-tibia-servers');
}

export default function BestOpenTibiaServersKeywordPage() {
  return <StaticKeywordPage slug="best-open-tibia-servers" />;
}
