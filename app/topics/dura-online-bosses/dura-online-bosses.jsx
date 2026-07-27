import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-bosses');
}

export default function DuraOnlineBossesKeywordPage() {
  return <StaticKeywordPage slug="dura-online-bosses" />;
}
