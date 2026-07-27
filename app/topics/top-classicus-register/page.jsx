import TopClassicusRegisterKeywordPage, { generateMetadata } from './top-classicus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusRegisterKeywordPage />;
}
