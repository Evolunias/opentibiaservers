import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-south-america-servers');
}

export default function OtmadnessSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-south-america-servers" />;
}
