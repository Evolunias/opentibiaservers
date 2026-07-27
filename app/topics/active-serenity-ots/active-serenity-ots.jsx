import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-ots');
}

export default function ActiveSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-ots" />;
}
