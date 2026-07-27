import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-launcher');
}

export default function RubinotLauncherKeywordPage() {
  return <StaticKeywordPage slug="rubinot-launcher" />;
}
