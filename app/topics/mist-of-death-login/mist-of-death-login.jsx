import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-login');
}

export default function MistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-login" />;
}
