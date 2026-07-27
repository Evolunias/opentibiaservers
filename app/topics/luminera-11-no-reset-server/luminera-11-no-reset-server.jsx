import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-no-reset-server');
}

export default function Luminera11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-no-reset-server" />;
}
