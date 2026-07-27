import UnlineBrazilServerKeywordPage, { generateMetadata } from './unline-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineBrazilServerKeywordPage />;
}
