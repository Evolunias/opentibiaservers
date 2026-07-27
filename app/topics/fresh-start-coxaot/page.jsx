import FreshStartCoxaotKeywordPage, { generateMetadata } from './fresh-start-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotKeywordPage />;
}
