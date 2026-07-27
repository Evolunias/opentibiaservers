import PopularThorniaRegisterKeywordPage, { generateMetadata } from './popular-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThorniaRegisterKeywordPage />;
}
