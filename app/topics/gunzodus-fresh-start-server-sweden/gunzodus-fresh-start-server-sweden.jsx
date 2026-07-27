import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-fresh-start-server-sweden');
}

export default function GunzodusFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-fresh-start-server-sweden" />;
}
