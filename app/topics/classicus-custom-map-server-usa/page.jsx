import ClassicusCustomMapServerUsaKeywordPage, { generateMetadata } from './classicus-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusCustomMapServerUsaKeywordPage />;
}
