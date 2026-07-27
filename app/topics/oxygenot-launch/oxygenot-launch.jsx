import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-launch');
}

export default function OxygenotLaunchKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-launch" />;
}
