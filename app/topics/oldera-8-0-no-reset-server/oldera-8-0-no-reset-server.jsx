import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-no-reset-server');
}

export default function Oldera80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-no-reset-server" />;
}
