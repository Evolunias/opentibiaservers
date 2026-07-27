import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-open-tibia');
}

export default function NoResetSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-open-tibia" />;
}
