import ClassicusArgentinaServerKeywordPage, { generateMetadata } from './classicus-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusArgentinaServerKeywordPage />;
}
