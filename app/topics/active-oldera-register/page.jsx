import ActiveOlderaRegisterKeywordPage, { generateMetadata } from './active-oldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaRegisterKeywordPage />;
}
