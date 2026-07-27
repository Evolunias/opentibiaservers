import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-server');
}

export default function FreshStartTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-server" />;
}
