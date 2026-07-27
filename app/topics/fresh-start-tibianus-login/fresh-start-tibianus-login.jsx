import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus-login');
}

export default function FreshStartTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus-login" />;
}
