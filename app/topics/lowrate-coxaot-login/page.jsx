import LowrateCoxaotLoginKeywordPage, { generateMetadata } from './lowrate-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotLoginKeywordPage />;
}
