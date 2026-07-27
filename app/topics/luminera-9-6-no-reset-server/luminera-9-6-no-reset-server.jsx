import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-no-reset-server');
}

export default function Luminera96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-no-reset-server" />;
}
