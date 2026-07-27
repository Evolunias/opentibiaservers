import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-tibia-world');
}

export default function DanubiaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="danubia-tibia-world" />;
}
