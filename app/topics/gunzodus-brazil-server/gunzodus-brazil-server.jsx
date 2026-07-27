import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-brazil-server');
}

export default function GunzodusBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-brazil-server" />;
}
