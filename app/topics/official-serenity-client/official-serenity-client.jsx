import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-client');
}

export default function OfficialSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-client" />;
}
