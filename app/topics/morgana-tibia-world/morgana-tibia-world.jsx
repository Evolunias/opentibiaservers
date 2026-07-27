import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('morgana-tibia-world');
}

export default function MorganaTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="morgana-tibia-world" />;
}
