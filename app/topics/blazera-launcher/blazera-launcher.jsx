import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-launcher');
}

export default function BlazeraLauncherKeywordPage() {
  return <StaticKeywordPage slug="blazera-launcher" />;
}
