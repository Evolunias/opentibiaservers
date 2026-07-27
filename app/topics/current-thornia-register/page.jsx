import CurrentThorniaRegisterKeywordPage, { generateMetadata } from './current-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaRegisterKeywordPage />;
}
