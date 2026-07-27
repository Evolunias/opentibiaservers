import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-launcher');
}

export default function InfernalOtLauncherKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-launcher" />;
}
