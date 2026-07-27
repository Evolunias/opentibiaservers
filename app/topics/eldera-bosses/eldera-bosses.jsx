import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-bosses');
}

export default function ElderaBossesKeywordPage() {
  return <StaticKeywordPage slug="eldera-bosses" />;
}
