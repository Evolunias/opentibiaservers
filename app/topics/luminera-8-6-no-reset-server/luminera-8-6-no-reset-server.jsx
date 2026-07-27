import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-no-reset-server');
}

export default function Luminera86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-no-reset-server" />;
}
