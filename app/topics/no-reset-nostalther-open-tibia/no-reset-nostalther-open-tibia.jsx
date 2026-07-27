import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-open-tibia');
}

export default function NoResetNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-open-tibia" />;
}
