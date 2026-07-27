import ClassicusUkServerKeywordPage, { generateMetadata } from './classicus-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusUkServerKeywordPage />;
}
