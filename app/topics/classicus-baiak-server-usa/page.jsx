import ClassicusBaiakServerUsaKeywordPage, { generateMetadata } from './classicus-baiak-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusBaiakServerUsaKeywordPage />;
}
