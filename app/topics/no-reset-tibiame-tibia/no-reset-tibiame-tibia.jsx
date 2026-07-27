import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-tibia');
}

export default function NoResetTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-tibia" />;
}
