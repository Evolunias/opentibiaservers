import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-official');
}

export default function ElderaOfficialKeywordPage() {
  return <StaticKeywordPage slug="eldera-official" />;
}
