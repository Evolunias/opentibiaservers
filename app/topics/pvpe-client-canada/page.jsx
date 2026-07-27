import PvpeClientCanadaKeywordPage, { generateMetadata } from './pvpe-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientCanadaKeywordPage />;
}
