import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-tibia');
}

export default function NoResetNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-tibia" />;
}
