import ThorniaRegisterKeywordPage, { generateMetadata } from './thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaRegisterKeywordPage />;
}
