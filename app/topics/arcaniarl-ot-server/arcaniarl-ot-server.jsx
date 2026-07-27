import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-ot-server');
}

export default function ArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-ot-server" />;
}
