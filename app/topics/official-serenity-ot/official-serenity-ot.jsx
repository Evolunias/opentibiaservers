import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-ot');
}

export default function OfficialSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-ot" />;
}
