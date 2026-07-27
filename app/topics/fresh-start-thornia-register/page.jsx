import FreshStartThorniaRegisterKeywordPage, { generateMetadata } from './fresh-start-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThorniaRegisterKeywordPage />;
}
