import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther');
}

export default function NoResetNostaltherKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther" />;
}
