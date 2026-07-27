import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-mexico-servers');
}

export default function OtmadnessMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-mexico-servers" />;
}
