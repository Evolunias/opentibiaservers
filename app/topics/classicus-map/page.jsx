import ClassicusMapKeywordPage, { generateMetadata } from './classicus-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusMapKeywordPage />;
}
