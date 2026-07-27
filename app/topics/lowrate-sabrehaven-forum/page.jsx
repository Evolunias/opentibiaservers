import LowrateSabrehavenForumKeywordPage, { generateMetadata } from './lowrate-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSabrehavenForumKeywordPage />;
}
