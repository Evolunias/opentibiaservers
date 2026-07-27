import ClassicusOtKeywordPage, { generateMetadata } from './classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusOtKeywordPage />;
}
