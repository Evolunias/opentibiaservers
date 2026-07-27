import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-no-reset-server');
}

export default function Luminera772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-no-reset-server" />;
}
