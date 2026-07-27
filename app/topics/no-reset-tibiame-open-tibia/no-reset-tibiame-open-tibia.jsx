import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-open-tibia');
}

export default function NoResetTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-open-tibia" />;
}
