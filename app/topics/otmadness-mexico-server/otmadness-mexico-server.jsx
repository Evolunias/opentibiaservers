import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-mexico-server');
}

export default function OtmadnessMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-mexico-server" />;
}
