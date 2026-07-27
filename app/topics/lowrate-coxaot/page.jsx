import LowrateCoxaotKeywordPage, { generateMetadata } from './lowrate-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotKeywordPage />;
}
