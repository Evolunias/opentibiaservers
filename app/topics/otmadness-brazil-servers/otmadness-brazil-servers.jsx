import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-brazil-servers');
}

export default function OtmadnessBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-brazil-servers" />;
}
