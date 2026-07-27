import CurrentCoxaotRegisterKeywordPage, { generateMetadata } from './current-coxaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotRegisterKeywordPage />;
}
