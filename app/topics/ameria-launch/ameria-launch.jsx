import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-launch');
}

export default function AmeriaLaunchKeywordPage() {
  return <StaticKeywordPage slug="ameria-launch" />;
}
