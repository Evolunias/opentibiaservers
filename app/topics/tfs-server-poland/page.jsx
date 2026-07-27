import TfsServerPolandKeywordPage, { generateMetadata } from './tfs-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerPolandKeywordPage />;
}
