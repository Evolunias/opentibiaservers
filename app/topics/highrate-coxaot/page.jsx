import HighrateCoxaotKeywordPage, { generateMetadata } from './highrate-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotKeywordPage />;
}
