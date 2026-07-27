import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-donations');
}

export default function GunzodusDonationsKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-donations" />;
}
