import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-launch');
}

export default function InfernalOtLaunchKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-launch" />;
}
