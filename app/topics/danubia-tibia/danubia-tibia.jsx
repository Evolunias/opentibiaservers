import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('danubia-tibia');
}

export default function DanubiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="danubia-tibia" />;
}
