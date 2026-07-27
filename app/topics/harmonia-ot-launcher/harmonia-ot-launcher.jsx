import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-launcher');
}

export default function HarmoniaOtLauncherKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-launcher" />;
}
