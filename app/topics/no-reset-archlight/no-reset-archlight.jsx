import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight');
}

export default function NoResetArchlightKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight" />;
}
