import ClassicusRetroServerLatinAmericaKeywordPage, { generateMetadata } from './classicus-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRetroServerLatinAmericaKeywordPage />;
}
