import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-tibia-world');
}

export default function LumineraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="luminera-tibia-world" />;
}
