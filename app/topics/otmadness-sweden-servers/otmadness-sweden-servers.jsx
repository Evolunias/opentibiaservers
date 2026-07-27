import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-sweden-servers');
}

export default function OtmadnessSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="otmadness-sweden-servers" />;
}
