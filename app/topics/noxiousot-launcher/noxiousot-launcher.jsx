import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-launcher');
}

export default function NoxiousotLauncherKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-launcher" />;
}
