import TopCoxaotKeywordPage, { generateMetadata } from './top-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotKeywordPage />;
}
