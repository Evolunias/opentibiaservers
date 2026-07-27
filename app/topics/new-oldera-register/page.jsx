import NewOlderaRegisterKeywordPage, { generateMetadata } from './new-oldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaRegisterKeywordPage />;
}
