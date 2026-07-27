import RealMapEvoluniaForumKeywordPage, { generateMetadata } from './real-map-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoluniaForumKeywordPage />;
}
