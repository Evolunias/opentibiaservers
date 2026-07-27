import TopOlderaRegisterKeywordPage, { generateMetadata } from './top-oldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaRegisterKeywordPage />;
}
