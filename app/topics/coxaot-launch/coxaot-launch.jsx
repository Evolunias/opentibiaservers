import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-launch');
}

export default function CoxaotLaunchKeywordPage() {
  return <StaticKeywordPage slug="coxaot-launch" />;
}
