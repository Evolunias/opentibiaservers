import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-fun-server');
}

export default function OtmadnessFunServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-fun-server" />;
}
