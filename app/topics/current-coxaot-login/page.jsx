import CurrentCoxaotLoginKeywordPage, { generateMetadata } from './current-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotLoginKeywordPage />;
}
