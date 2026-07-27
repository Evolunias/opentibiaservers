import PvpeClientPolandKeywordPage, { generateMetadata } from './pvpe-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientPolandKeywordPage />;
}
