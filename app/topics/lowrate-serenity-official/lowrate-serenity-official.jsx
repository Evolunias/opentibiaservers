import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-official');
}

export default function LowrateSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-official" />;
}
