import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-sweden-servers');
}

export default function GunzodusSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-sweden-servers" />;
}
