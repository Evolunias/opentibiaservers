import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-ot');
}

export default function LowrateSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-ot" />;
}
