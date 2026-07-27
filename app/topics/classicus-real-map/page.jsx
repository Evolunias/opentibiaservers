import ClassicusRealMapKeywordPage, { generateMetadata } from './classicus-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRealMapKeywordPage />;
}
