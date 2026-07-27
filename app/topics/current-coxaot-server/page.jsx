import CurrentCoxaotServerKeywordPage, { generateMetadata } from './current-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotServerKeywordPage />;
}
