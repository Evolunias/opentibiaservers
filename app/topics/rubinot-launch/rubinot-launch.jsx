import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-launch');
}

export default function RubinotLaunchKeywordPage() {
  return <StaticKeywordPage slug="rubinot-launch" />;
}
