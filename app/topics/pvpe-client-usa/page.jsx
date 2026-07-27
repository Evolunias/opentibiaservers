import PvpeClientUsaKeywordPage, { generateMetadata } from './pvpe-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientUsaKeywordPage />;
}
