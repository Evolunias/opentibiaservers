import NewCoxaotKeywordPage, { generateMetadata } from './new-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCoxaotKeywordPage />;
}
