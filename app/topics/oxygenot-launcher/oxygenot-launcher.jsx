import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-launcher');
}

export default function OxygenotLauncherKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-launcher" />;
}
