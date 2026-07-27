import UnlineFunServerKeywordPage, { generateMetadata } from './unline-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineFunServerKeywordPage />;
}
