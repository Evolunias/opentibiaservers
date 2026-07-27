import CurrentOlderaRegisterKeywordPage, { generateMetadata } from './current-oldera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaRegisterKeywordPage />;
}
