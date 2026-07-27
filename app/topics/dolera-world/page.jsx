import DoleraWorldKeywordPage, { generateMetadata } from './dolera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraWorldKeywordPage />;
}
