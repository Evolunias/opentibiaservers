import ClassicusRetroServerMexicoKeywordPage, { generateMetadata } from './classicus-retro-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRetroServerMexicoKeywordPage />;
}
