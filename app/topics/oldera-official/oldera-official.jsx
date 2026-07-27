import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-official');
}

export default function OlderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="oldera-official" />;
}
