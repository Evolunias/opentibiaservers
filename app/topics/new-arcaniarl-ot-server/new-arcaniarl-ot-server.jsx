import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-ot-server');
}

export default function NewArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-ot-server" />;
}
