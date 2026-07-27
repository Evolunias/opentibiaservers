import ClassicusEuropeServerKeywordPage, { generateMetadata } from './classicus-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusEuropeServerKeywordPage />;
}
