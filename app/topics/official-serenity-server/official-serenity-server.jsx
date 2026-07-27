import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-server');
}

export default function OfficialSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-server" />;
}
