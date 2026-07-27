import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-fresh-start-server-argentina');
}

export default function MiracleFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-fresh-start-server-argentina" />;
}
