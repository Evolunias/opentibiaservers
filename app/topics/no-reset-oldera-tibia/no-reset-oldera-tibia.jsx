import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-tibia');
}

export default function NoResetOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-tibia" />;
}
