import ClassicusPrivateServerKeywordPage, { generateMetadata } from './classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusPrivateServerKeywordPage />;
}
