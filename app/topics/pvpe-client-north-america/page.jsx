import PvpeClientNorthAmericaKeywordPage, { generateMetadata } from './pvpe-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientNorthAmericaKeywordPage />;
}
