import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-official');
}

export default function NoResetSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-official" />;
}
