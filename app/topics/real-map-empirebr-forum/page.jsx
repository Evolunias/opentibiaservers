import RealMapEmpirebrForumKeywordPage, { generateMetadata } from './real-map-empirebr-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEmpirebrForumKeywordPage />;
}
