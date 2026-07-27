import ClassicusRetroServerPolandKeywordPage, { generateMetadata } from './classicus-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRetroServerPolandKeywordPage />;
}
