import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-launcher');
}

export default function CoxaotLauncherKeywordPage() {
  return <StaticKeywordPage slug="coxaot-launcher" />;
}
