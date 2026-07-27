import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-tibia');
}

export default function MorganaTibiaKeywordPage() {
  return <StaticKeywordPage slug="morgana-tibia" />;
}
