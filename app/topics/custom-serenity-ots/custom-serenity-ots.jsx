import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-ots');
}

export default function CustomSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-ots" />;
}
