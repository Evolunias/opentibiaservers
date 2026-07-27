import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-no-reset-server');
}

export default function Luminera14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-no-reset-server" />;
}
