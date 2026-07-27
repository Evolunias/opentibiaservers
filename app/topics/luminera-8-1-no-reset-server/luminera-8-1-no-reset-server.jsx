import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-no-reset-server');
}

export default function Luminera81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-no-reset-server" />;
}
