import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-launcher');
}

export default function MediviaLauncherKeywordPage() {
  return <StaticKeywordPage slug="medivia-launcher" />;
}
