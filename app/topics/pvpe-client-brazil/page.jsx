import PvpeClientBrazilKeywordPage, { generateMetadata } from './pvpe-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientBrazilKeywordPage />;
}
