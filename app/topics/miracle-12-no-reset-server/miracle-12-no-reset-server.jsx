import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-no-reset-server');
}

export default function Miracle12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-no-reset-server" />;
}
