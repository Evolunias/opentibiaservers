import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia');
}

export default function OfficialThorniaKeywordPage() {
  return <StaticKeywordPage slug="official-thornia" />;
}
