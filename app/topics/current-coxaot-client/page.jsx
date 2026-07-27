import CurrentCoxaotClientKeywordPage, { generateMetadata } from './current-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotClientKeywordPage />;
}
