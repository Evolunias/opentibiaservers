import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-mist-of-death-login');
}

export default function ActiveMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="active-mist-of-death-login" />;
}
