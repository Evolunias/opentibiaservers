import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-status');
}

export default function MistOfDeathStatusKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-status" />;
}
