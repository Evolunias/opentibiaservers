import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-tibia');
}

export default function NoResetSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-tibia" />;
}
