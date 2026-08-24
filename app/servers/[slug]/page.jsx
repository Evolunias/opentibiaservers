import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

export async function generateMetadata({ params }) {
  return buildCanonicalServerMetadata(params.slug);
}

export default async function ServerSlugPage({ params }) {
  return <CanonicalServerRoute slug={params.slug} />;
}
