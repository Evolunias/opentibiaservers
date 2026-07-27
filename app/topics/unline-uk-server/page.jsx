import UnlineUkServerKeywordPage, { generateMetadata } from './unline-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineUkServerKeywordPage />;
}
