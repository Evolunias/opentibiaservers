import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-ot-server');
}

export default function OfficialSerenityOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-ot-server" />;
}
