import ClassicusCustomMapServerArgentinaKeywordPage, { generateMetadata } from './classicus-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusCustomMapServerArgentinaKeywordPage />;
}
