import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-south-america-server');
}

export default function OtmadnessSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-south-america-server" />;
}
