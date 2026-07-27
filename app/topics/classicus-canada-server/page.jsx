import ClassicusCanadaServerKeywordPage, { generateMetadata } from './classicus-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusCanadaServerKeywordPage />;
}
