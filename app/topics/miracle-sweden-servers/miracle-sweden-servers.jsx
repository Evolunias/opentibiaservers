import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-sweden-servers');
}

export default function MiracleSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-sweden-servers" />;
}
