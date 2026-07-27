import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-trailer');
}

export default function CyntaraTrailerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-trailer" />;
}
