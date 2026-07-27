import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-no-reset-server');
}

export default function Luminera84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-no-reset-server" />;
}
