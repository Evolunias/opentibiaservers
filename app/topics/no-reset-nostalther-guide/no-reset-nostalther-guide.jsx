import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-guide');
}

export default function NoResetNostaltherGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-guide" />;
}
