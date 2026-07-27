import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-sweden-server');
}

export default function OtmadnessSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="otmadness-sweden-server" />;
}
