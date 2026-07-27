import ClassicusRetroServerUsaKeywordPage, { generateMetadata } from './classicus-retro-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRetroServerUsaKeywordPage />;
}
