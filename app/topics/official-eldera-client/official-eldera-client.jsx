import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-client');
}

export default function OfficialElderaClientKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-client" />;
}
