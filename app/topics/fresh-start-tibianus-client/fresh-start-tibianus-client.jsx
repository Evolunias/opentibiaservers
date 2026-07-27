import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-client');
}

export default function FreshStartTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-client" />;
}
