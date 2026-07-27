import TopThorniaRegisterKeywordPage, { generateMetadata } from './top-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThorniaRegisterKeywordPage />;
}
