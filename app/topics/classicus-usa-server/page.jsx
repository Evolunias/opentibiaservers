import ClassicusUsaServerKeywordPage, { generateMetadata } from './classicus-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusUsaServerKeywordPage />;
}
