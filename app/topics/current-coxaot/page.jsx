import CurrentCoxaotKeywordPage, { generateMetadata } from './current-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotKeywordPage />;
}
