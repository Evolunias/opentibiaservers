import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-ot');
}

export default function NoResetSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-ot" />;
}
