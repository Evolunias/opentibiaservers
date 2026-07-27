import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity');
}

export default function OfficialSerenityKeywordPage() {
  return <StaticKeywordPage slug="official-serenity" />;
}
