import ClassicusRetroServerGermanyKeywordPage, { generateMetadata } from './classicus-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRetroServerGermanyKeywordPage />;
}
