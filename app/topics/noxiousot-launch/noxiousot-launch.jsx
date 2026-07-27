import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-launch');
}

export default function NoxiousotLaunchKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-launch" />;
}
