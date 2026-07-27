import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-12-no-reset-server');
}

export default function Luminera12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-12-no-reset-server" />;
}
