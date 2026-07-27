import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-uk-server');
}

export default function MistOfDeathUkServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-uk-server" />;
}
