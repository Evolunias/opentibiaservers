import LowrateEvoluniaForumKeywordPage, { generateMetadata } from './lowrate-evolunia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoluniaForumKeywordPage />;
}
