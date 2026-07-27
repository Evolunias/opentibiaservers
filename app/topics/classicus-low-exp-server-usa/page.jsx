import ClassicusLowExpServerUsaKeywordPage, { generateMetadata } from './classicus-low-exp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusLowExpServerUsaKeywordPage />;
}
