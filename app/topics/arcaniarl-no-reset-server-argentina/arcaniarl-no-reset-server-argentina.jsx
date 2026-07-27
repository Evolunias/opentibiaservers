import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-argentina');
}

export default function ArcaniarlNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-argentina" />;
}
