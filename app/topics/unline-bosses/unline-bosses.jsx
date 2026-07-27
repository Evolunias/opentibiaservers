import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-bosses');
}

export default function UnlineBossesKeywordPage() {
  return <StaticKeywordPage slug="unline-bosses" />;
}
