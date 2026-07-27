import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-ots');
}

export default function LowrateSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-ots" />;
}
