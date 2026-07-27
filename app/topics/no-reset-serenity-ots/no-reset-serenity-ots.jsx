import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-ots');
}

export default function NoResetSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-ots" />;
}
