import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-no-reset-server');
}

export default function Luminera15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-no-reset-server" />;
}
