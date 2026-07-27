import ClassicusRealMapServerPolandKeywordPage, { generateMetadata } from './classicus-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRealMapServerPolandKeywordPage />;
}
