import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-serenity-open-tibia');
}

export default function ActiveSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-serenity-open-tibia" />;
}
