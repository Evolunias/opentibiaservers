import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-ots');
}

export default function SerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="serenity-ots" />;
}
