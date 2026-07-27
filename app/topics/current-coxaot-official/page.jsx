import CurrentCoxaotOfficialKeywordPage, { generateMetadata } from './current-coxaot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotOfficialKeywordPage />;
}
