import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-tibia');
}

export default function NoResetDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-tibia" />;
}
