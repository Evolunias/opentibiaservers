import ClassicusRetroServerArgentinaKeywordPage, { generateMetadata } from './classicus-retro-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRetroServerArgentinaKeywordPage />;
}
