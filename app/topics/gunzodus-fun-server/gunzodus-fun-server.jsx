import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fun-server');
}

export default function GunzodusFunServerKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fun-server" />;
}
