import ClassicusRetroServerCanadaKeywordPage, { generateMetadata } from './classicus-retro-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRetroServerCanadaKeywordPage />;
}
