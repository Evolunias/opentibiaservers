import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-originaltibia');
}

export default function OfficialOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="official-originaltibia" />;
}
