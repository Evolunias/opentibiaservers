import CurrentAmeriaRegisterKeywordPage, { generateMetadata } from './current-ameria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaRegisterKeywordPage />;
}
