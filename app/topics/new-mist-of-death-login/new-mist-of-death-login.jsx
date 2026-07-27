import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-mist-of-death-login');
}

export default function NewMistOfDeathLoginKeywordPage() {
  return <StaticKeywordPage slug="new-mist-of-death-login" />;
}
