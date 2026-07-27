import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-brazil-server');
}

export default function OtmadnessBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-brazil-server" />;
}
