import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-bosses');
}

export default function OlderaBossesKeywordPage() {
  return <StaticKeywordPage slug="oldera-bosses" />;
}
