import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob');
}

export default function OfficialCanobKeywordPage() {
  return <StaticKeywordPage slug="official-canob" />;
}
