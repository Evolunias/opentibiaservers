import ClassicusRetroServerSouthAmericaKeywordPage, { generateMetadata } from './classicus-retro-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusRetroServerSouthAmericaKeywordPage />;
}
